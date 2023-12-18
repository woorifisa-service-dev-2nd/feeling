const commentAnalysisAPI = async (content) => {
  const url = '/submitComment';
  const body = {
    content,
  };

  await fetch(url, optionsForm(body))
    .then((response) => response.json())
    .then((response) => paintResult(response))
    .catch((e) => console.error(e));
};

