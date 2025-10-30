<template>
    bid
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "Bid",
  data() {
    return {
      auctions_id: this.$route.params.id,
    };
  },

  methods: {
    // ✅ Fetch all auctions
    getAuctions() {
      DataService.getAuctions()
        .then((response) => {
          this.auctions = response.data;
        })
        .catch((error) => {
          console.error("Error fetching auctions:", error);
          alert("Failed to load auctions.");
        });
    },
    
    getImageUrl(imagePath) {
      if (!imagePath) return "";
      if (imagePath.startsWith("http")) return imagePath;
      return `/storage/${imagePath}`; // Adjust if different path
    },
  },

  mounted() {
    this.auctions_id = this.$route.params.id;
    
  },
};
</script>