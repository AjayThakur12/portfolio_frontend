
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import axios from "axios";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([{
    "id": 139835298,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzk4MzUyOTg=",
    "svn_url":"https://github.com/AjayThakur12/task_management",
    "name": "Task Management",
    "description": "Task Management Build in Flutter",
    "stargazers_count":"2",
    "forks_count":"1"
  },{
    "id": 139817922,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzk4MTc5MjI=",
    "svn_url":"https://github.com/AjayThakur12/xmeme",
    "name": "Meme's App UI",
    "description": "Meme's App Frontend",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 137070394,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzcwNzAzOTQ=",
    "svn_url":"https://github.com/AjayThakur12/xmeme-backend",
    "name": "Meme's App",
    "description": "Meme's App Backend",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 149817922,
    "node_id": "KDEwOlJlcG9zaXRvcnkxMzk4MTc5MjI=",
    "svn_url":"https://github.com/AjayThakur12/portfolio_frontend",
    "name": "PortfolioUI",
    "description": "Portfolio Frontend",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 159817922,
    "node_id": "ZDEwOlJlcG9zaXRvcnkxMzk4MTc5MjI=",
    "svn_url":"https://github.com/AjayThakur12/portfolio_backend",
    "name": "Portfolio",
    "description": "Portfolio Backend",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 176791610,
    "node_id": "MDEwOlJlcG9zaXRvcnkxOTY3OTE2MTS=",
    "svn_url":"https://github.com/AjayThakur12/song-recognizer.git",
    "name": "Song Recognizer",
    "description": "Song Recognizer Using Deep Learning",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 166791610,
    "node_id": "MDEwOlJlcG9zaXRvcnkxOTY3OTE2MTT=",
    "svn_url":"https://github.com/AjayThakur12/bikeshare-data-analysis",
    "name": "Bikeshare",
    "description": "Bikeshare Data Analysis",
    "stargazers_count":"0",
    "forks_count":"0"
  },{
    "id": 196791610,
    "node_id": "MDEwOlJlcG9zaXRvcnkxOTY3OTE2MTA=",
    "svn_url":"https://github.com/AjayThakur12/psych",
    "name": "Psych Game",
    "description": "Psych Game LLD",
    "stargazers_count":"0",
    "forks_count":"0"
  }]);
  console.log(process.env.GITHUB_TOKEN);
   
  
  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/user/repos", {
  //       params: {
  //         visibility: "public",
  //         per_page: 100,
  //         affiliation: "owner,collaborator",
  //       },
  //       headers: {
  //         Authorization: `token ${process.env.GITHUB_TOKEN}`,
  //       },
  //     })
  //     .then((response) => response.data)
  //     .then((repoData) => {
  //       repoData.sort((a, b) =>
  //         a.stargazers_count < b.stargazers_count ? 1 : -1
  //       );
  //       console.log(repoData);
  //       repoData = repoData.slice(0, 8);
  //       setRepos(repoData);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <Wrapper as={Container} id="projects">
      {repos.length > 0 && <h2>Projects</h2>}
      <Grid>
        {repos.map((node) => (
          <Item
            key={node.id}
            as="a"
            href={node.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.stargazers_count}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.forks_count}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
