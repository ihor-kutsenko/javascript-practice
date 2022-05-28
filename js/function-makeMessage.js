function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;

  return message;
}
console.log(makeMessage("Radar", 6150));
console.log(makeMessage("Scanner", 3500));
console.log(makeMessage("Reactor", 8000));
console.log(makeMessage("Engine", 4070));
