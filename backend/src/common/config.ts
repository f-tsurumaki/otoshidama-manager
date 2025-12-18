export const config = {
  aozora: {
    apiURL: process.env.AOZORA_API_URL || 'https://api.sunabar.gmo-aozora.com',
    accessToken: process.env.AOZORA_ACCESS_TOKEN || '',
  },
};

if (!config.aozora.accessToken) {
    console.warn('⚠️ AOZORA_ACCESS_TOKEN が設定されていません');
}