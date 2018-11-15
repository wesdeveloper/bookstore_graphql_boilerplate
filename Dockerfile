FROM node
ADD . /bookstore
WORKDIR /bookstore
RUN npm install

HEALTHCHECK --interval=60s --timeout=1s CMD curl --fail http://localhost:4000/health-status || exit 1

ENTRYPOINT ["./entrypoint.sh"]
CMD ["bookstore"]
