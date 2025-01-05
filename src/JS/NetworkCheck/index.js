/*
Path: src/JS/NetworkCheck/index.js
Este script se encarga de verificar la conexión a internet.
*/

console.log('         [INFO ] [src/JS/NetworkCheck/index.js             ]');

import LogService from '../services/LogService';
import { getApiEndpoint } from '@/JS/NetworkCheck/ApiEndpointProvider';

export default {
  data() {
    return {
      isConnected: false,
      checkInterval: null
    }
  },
  async mounted() {
    await this.checkConnection();
    window.addEventListener('online', this.checkConnection);
    window.addEventListener('offline', this.checkConnection);
    this.checkInterval = setInterval(this.checkConnection, 15000); 
  },
  beforeDestroy() {
    window.removeEventListener('online', this.checkConnection);
    window.removeEventListener('offline', this.checkConnection);
    clearInterval(this.checkInterval);
  },
  methods: {
    async checkConnection() {
      const endpoint = await getApiEndpoint();
      LogService.info('[NetworkCheck] endpoint:', endpoint);
      LogService.info('[NetworkCheck] isConnected:', endpoint !== '');
      this.isConnected = endpoint !== '';
    }
  }
}