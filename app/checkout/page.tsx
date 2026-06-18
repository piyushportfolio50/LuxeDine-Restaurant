const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions")
      return
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    // Validate based on payment method
    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        toast.error("Please fill in all card details")
        return
      }
      if (cardNumber.replace(/\s/g, "").length < 16) {
        toast.error("Please enter a valid card number")
        return
      }
    }

    if (paymentMethod === "netbanking" && !selectedBank) {
      toast.error("Please select a bank")
      return
    }

    // Clear cart after successful order
    clearCart()

    // Show popup then redirect
    setShowOrderPopup(true)
    setTimeout(() => {
      setShowOrderPopup(false)
      router.push("/")
    }, 3000)
  }