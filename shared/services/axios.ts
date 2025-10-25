/**
 * @deprecated Use o composable useApi() em vez desta instância direta
 * Este arquivo é mantido para compatibilidade com código existente
 */
import { useApi } from "~/composables/useApi"

// Para compatibilidade retroativa, exporta a instância do axios
const { instance } = useApi()
export default instance
