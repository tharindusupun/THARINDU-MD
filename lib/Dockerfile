FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/tharindusupun/THARINDU-MD /root/tharindusupun
WORKDIR /root/tharindusupun/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
