const form = (() => {
  const getInput = () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      form.reset();
      return data;
    })
  };
  return { getInput };
})();
export default form;