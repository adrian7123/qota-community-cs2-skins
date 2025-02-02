export class Constants {
  static get currentHost(): string | undefined {
    if (import.meta.client) {
      return `${window.location.protocol}//${window.location.host}/login`;
    }
  }
  static readonly skinsUrl =
    "https://bymykel.github.io/CSGO-API/api/en/skins.json";
}
