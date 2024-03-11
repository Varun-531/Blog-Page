import React from "react";
import PostAuthor from "../components/postauthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/Thumnail1.jpg";

function postdetail() {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />

          <div className="post-detail_buttons">
            <Link to={"posts/werwer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"posts/werwer/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post_detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor
          tempore eius, quidem numquam pariatur aliquid quasi ipsam repellat,
          non temporibus aut laudantium ullam eos facere. Assumenda, iusto
          voluptas? Quo eligendi labore, vero voluptatem molestiae omnis numquam
          hic consectetur aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem magni, officia distinctio sequi earum fuga dignissimos
          at aliquam veniam inventore quam sunt voluptatum id cum quo. Officia
          fuga perferendis ad, dicta ipsam harum, voluptate facere esse, enim
          reprehenderit molestiae nisi.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        commodi! Accusamus qui doloremque, in autem culpa beatae. Ad sapiente
        illum neque quod est inventore, nemo ut nostrum earum cupiditate maxime
        nesciunt nihil odio et officia facilis amet sit minus iure non quasi
        molestiae totam doloribus dicta. Quam eveniet in accusantium architecto
        iste incidunt, fuga, reprehenderit necessitatibus similique sequi
        inventore ullam nam aliquid vitae minus consequatur odio neque nobis
        nesciunt expedita aut ducimus delectus eos. Inventore voluptatem quidem
        obcaecati laborum maiores eum ad aliquam, quibusdam quos itaque expedita
        asperiores. Asperiores nostrum, ut, in ex quo soluta iste aut magni
        delectus sint, libero suscipit ea? Debitis sit dignissimos sunt nam
        magni soluta sequi.
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          corrupti deleniti veniam suscipit, eius facilis! Magnam id alias vel
          doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          iste nulla obcaecati voluptatibus illum et aliquid dicta nihil totam
          voluptas blanditiis, accusantium facilis omnis! Impedit odit
          aspernatur et id fuga, rerum aliquid ipsam officia dolore harum odio
          eum, consequuntur tenetur ut dolor eveniet maiores in culpa! Magnam
          cumque sint ullam voluptates quia mollitia impedit omnis maxime
          dolorem aut in sit, error corporis dicta harum architecto nemo fugit
          exercitationem excepturi. Voluptas quod, quibusdam non amet hic porro
          ipsa quisquam? Fugit, exercitationem necessitatibus sapiente sed,
          magnam illo eveniet cupiditate sit quisquam perspiciatis soluta minus
          maxime dignissimos. Aspernatur exercitationem id quod beatae possimus
          praesentium harum quae cumque, minus laudantium totam quibusdam eos
          ab? Sapiente amet dolorem nulla eveniet consequatur quaerat nostrum
          inventore, quasi voluptates sequi dignissimos. Ab eos quam officiis
          impedit odit tempora et nam quia unde architecto molestiae doloribus
          sequi illo eaque, ullam delectus veniam! Recusandae repellendus magni
          aut quidem. Quibusdam natus eaque ullam. Dolores repellat doloribus
          quidem, ut vitae suscipit dicta impedit dolorem commodi sint error
          repellendus aliquid! Aliquam eveniet omnis exercitationem dolorum
          molestias, beatae aperiam id debitis molestiae rem harum delectus,
          totam magni at possimus, nemo expedita. Ut id saepe perspiciatis,
          obcaecati quo repellat laudantium eius recusandae ipsam dolorum?
        </p>
      </div>
    </section>
  );
}

export default postdetail;
