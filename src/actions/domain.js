let domain = "https://greenoffice.orvibo.com/intelligenceOffice";
if (process.env.NODE_ENV === "development") {
  domain = "http://192.168.2.189:8080/intelligenceOffice";
}
if (process.env.MODLE == "test") {
  domain = "http://192.168.2.189:8080/intelligenceOffice";
}
export default domain;
