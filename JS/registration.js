  function nextStep(step) {
      // Hide all forms
      document.querySelectorAll(".form-step").forEach(f => f.classList.add("hidden"));
      document.getElementById("form-step" + step).classList.remove("hidden");

      // Update step tabs
      document.querySelectorAll(".step").forEach(tab => tab.classList.remove("active"));
      document.getElementById("step" + step + "-tab").classList.add("active");
    }
  