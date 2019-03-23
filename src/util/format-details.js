const FormatDetails = (currentState, payload) => {
  const prevState = currentState[payload.key]
    ? `${currentState[payload.key]},`
    : '';

  if (payload.key === 'vehicles' || payload.key === 'species') {
    return `${prevState} ${payload.data.data.name}`;
  }

  return `${prevState} ${payload.data.data.title}`;
};

export default FormatDetails;
