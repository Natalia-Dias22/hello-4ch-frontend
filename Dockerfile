# Imagem base do Nginx (servidor web leve)
FROM nginx:alpine

# Copiar arquivos do frontend para o Nginx
COPY src/index.html /usr/share/nginx/html/
COPY src/styles.css /usr/share/nginx/html/
COPY src/app.js /usr/share/nginx/html/

# Expor porta 8080 (Cloud Run usa 8080)
EXPOSE 8080

# Configurar Nginx para usar porta 8080
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
