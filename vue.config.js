module.exports = {
    devServer: {
        proxy: { // proxyTable 설정
            '/api':{
            target: 'http://localhost:4000',
            changeOrigin: true   
            }         
        }
    }
}
    
