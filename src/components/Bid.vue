<template>
  <section id="bid-section" class="padding-large bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="card p-5 shadow-sm border-0 rounded-4">
            <h2 class="text-center text-uppercase mb-4 text-dark">Place Your Bid</h2>
            <form @submit.prevent="submitBid">
              <div class="row">
                <!-- Customer Name -->
                <div class="col-md-6 mb-3">
                  <label for="customer_name" class="form-label text-uppercase small fw-bold"
                    >Customer Name</label
                  >
                  <input
                    type="text"
                    id="customer_name"
                    v-model="form.customer_name"
                    class="form-control form-control-lg rounded-3"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <!-- Customer Email -->
                <div class="col-md-6 mb-3">
                  <label for="customer_email" class="form-label text-uppercase small fw-bold"
                    >Customer Email</label
                  >
                  <input
                    type="email"
                    id="customer_email"
                    v-model="form.customer_email"
                    class="form-control form-control-lg rounded-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <!-- Customer Contact -->
                <div class="col-md-6 mb-3">
                  <label for="customer_contact" class="form-label text-uppercase small fw-bold"
                    >Customer Contact</label
                  >
                  <input
                    type="text"
                    id="customer_contact"
                    v-model="form.customer_contact"
                    class="form-control form-control-lg rounded-3"
                    placeholder="Enter contact number"
                    required
                  />
                </div>

                <!-- Bid Amount -->
                <div class="col-md-6 mb-3">
                  <label for="bid_amount" class="form-label text-uppercase small fw-bold"
                    >Bid Amount (BDT)</label
                  >
                  <input
                    type="number"
                    id="bid_amount"
                    v-model="form.bid_amount"
                    class="form-control form-control-lg rounded-3"
                    placeholder="Enter your bid amount"
                    required
                  />
                </div>

                <!-- Bid Date -->
                <div class="col-md-6 mb-4">
                  <label for="bid_date" class="form-label text-uppercase small fw-bold"
                    >Bid Date</label
                  >
                  <input
                    type="date"
                    id="bid_date"
                    v-model="form.bid_date"
                    class="form-control form-control-lg rounded-3"
                    required
                  />
                </div>
              </div>

              <div class="text-center mt-4">
                <button
                  type="submit"
                  class="btn btn-dark btn-lg text-uppercase px-5 py-2 rounded-3"
                >
                  Submit Bid
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "Bid",
  data() {
    return {
      auction_id: this.$route.params.id,
      form: {
        customer_name: "",
        customer_email: "",
        customer_contact: "",
        bid_amount: "",
        bid_date: "",
      },
    };
  },
  methods: {
    submitBid() {
      const payload = {
        ...this.form,
        auction_id: this.auction_id,
      };

      DataService.addBid(payload)
        .then(() => {
          alert("✅ Bid submitted successfully!");
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error submitting bid:", error);
          alert("❌ Failed to submit bid. Please check your input or try again.");
        });
    },

    resetForm() {
      this.form = {
        customer_name: "",
        customer_email: "",
        customer_contact: "",
        bid_amount: "",
        bid_date: "",
      };
    },
  },
};
</script>

<style scoped>
#bid-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.card {
  background-color: #fff;
}
.btn-dark:hover {
  background-color: #333 !important;
  color: #fff !important;
}
</style>
