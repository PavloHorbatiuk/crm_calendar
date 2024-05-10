export const sorteByTime = (events: Event[]) => {
  return events.sort((a, b) => {
    //TODO: why does'nt this property exist ?
    return new Date(a.date).getHours() - new Date(b.date).getHours();
  });
};
