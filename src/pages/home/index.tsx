import { Header } from "../../components/header";
import { HomeContainer, ProfileCardContainer, ProfileCardContent, ProfileInformationCard } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PostCard } from "./components";

export function Home() {
   return (
      <>
      <Header />

      <HomeContainer>
         <ProfileCardContainer>
            <img src="/img-placeholder.jpg" alt="" />

            <ProfileCardContent>
               <div className="profile-header">
                  <h1>Cameron Williamson</h1>

                  <a href="">
                     GITHUB
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                  </a>
               </div>

               <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>

               <div className="informations">
                  <ProfileInformationCard>
                     <FontAwesomeIcon icon={faGithub} />
                     cameronwll
                  </ProfileInformationCard>

                  <ProfileInformationCard>
                     <FontAwesomeIcon icon={faBuilding} />
                     Rocketseat
                  </ProfileInformationCard>

                  <ProfileInformationCard>
                     <FontAwesomeIcon icon={faUserGroup} />
                     32 seguidores
                  </ProfileInformationCard>
               </div>
            </ProfileCardContent>
         </ProfileCardContainer>

         <div className="search">
            <div className="search-header">
               <h2>Publicações</h2>
               <span>6 publicações</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo"/>
         </div>

         <div className="posts">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
         </div>
      </HomeContainer>
      
      </>
   )
}