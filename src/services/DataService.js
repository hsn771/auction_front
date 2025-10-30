import http from "../http-common";

class DataService {

  // 🔹 Auction APIs
  getAuctions() {
    return http.get("/auctions");
  }
  addBid(data) {
    return http.post("/bids", data);
  }

}

export default new DataService();
