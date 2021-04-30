const getRepos = require("../src/exercise4");

it("verfica se os repositorios estão na lista retornada", () => {
  const url = "https://api.github.com/orgs/tryber/repos";
  return getRepos(url).then((data) => {
    expect(data).toContain("sd-01-week4-5-project-todo-list");
    expect(data).toContain("sd-01-week4-5-project-meme-generator");
  });
});
