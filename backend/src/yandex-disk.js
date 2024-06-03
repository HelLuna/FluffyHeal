class YandexDisk {
  requestUrl = 'https://cloud-api.yandex.net/v1/disk/'
  headers = {}

  constructor(OAuth) {
    headers['Authorization'] = `OAuth ${OAuth}`;
  }
}