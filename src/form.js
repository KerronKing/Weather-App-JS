const form = (() => {
  const getInput = () => {
    const form = document.getElementById('form');
    const data = Object.fromEntries(new FormData(form));
    return data;
  };
  return { getInput };
})();
export default form;