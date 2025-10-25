import axiosStatic, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios"

/**
 * Composable para fazer requisições HTTP usando Axios
 * Integrado com o sistema de autenticação da aplicação
 */
export const useApi = () => {
  const authStore = useAuthStore()

  // Cria instância do axios com configurações padrão
  const createAxiosInstance = (): AxiosInstance => {
    const instance = axiosStatic.create({
      baseURL: import.meta.env.API_URL,
      timeout: 20000,
      params: {
        steamid: authStore.steamId
      }
    })

    // Interceptor para requisições
    instance.interceptors.request.use(
      (config) => {
        // Sempre inclui o steamId atualizado nas requisições
        if (authStore.steamId) {
          config.params = {
            ...config.params,
            steamid: authStore.steamId
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Interceptor para respostas
    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        // Log de erros para debugging
        console.error("Erro na requisição:", {
          url: error.config?.url,
          method: error.config?.method,
          status: error.response?.status,
          message: error.message
        })

        // Tratamento de erros específicos
        if (error.response?.status === 401) {
          console.warn("Token expirado ou inválido")
          // Aqui você pode implementar logout automático ou refresh token
        }

        return Promise.reject(error)
      }
    )

    return instance
  }

  // Instância principal do axios
  const axios = createAxiosInstance()

  // Métodos auxiliares para requisições comuns
  const api = {
    // GET request
    get: async <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axios.get<T>(url, config)
    },

    // POST request
    post: async <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
      return axios.post<T>(url, data, config)
    },

    // PUT request
    put: async <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
      return axios.put<T>(url, data, config)
    },

    // DELETE request
    delete: async <T = any>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
      return axios.delete<T>(url, config)
    },

    // PATCH request
    patch: async <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
      return axios.patch<T>(url, data, config)
    },

    // Acesso direto à instância do axios para casos especiais
    instance: axios
  }

  return api
}
