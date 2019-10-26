function perfect(num = 0, toplam = 1, i = 2) {
  if (isNaN(num)) {
    return false
  }
  if (i >= num/2+1) {
    if (toplam == num) {
      return true
    }
    return false
  }

  if (num % i == 0) {
    toplam += i
  }
  i++

  return perfect(num, toplam, i)
}

module.exports = perfect
