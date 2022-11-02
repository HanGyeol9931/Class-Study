import React from 'react'
import { Header,ImgContent,Test} from '../com'
import { useParams,useNavigate} from 'react-router-dom'
import {img6,img1,img2,img3,img4,img5} from "../img"

// 이미지
const Img = () => {
    let nav = useNavigate()
    let main =  ()=>{
        nav("/")
    }
    const test1 = {
        a : <p>Sint voluptatibus quae, id modi eaque quo voluptatem dolorum magni! Reprehenderit possimus voluptatem odit voluptatum dolore nesciunt quisquam sunt minima modi porro.</p>,
        b : <p>Officia quo eveniet molestiae ullam dolore blanditiis quos vitae debitis delectus rerum, repellendus quidem eaque numquam reiciendis, atque excepturi nam autem ut?</p> ,
        c : <p>Voluptatibus unde modi non sed, suscipit repellendus explicabo delectus iste temporibus eum sapiente incidunt rerum nemo ipsam laborum? Rem adipisci temporibus velit.</p>,
        d : <p>Commodi, consectetur consequatur rerum nobis officia fugit neque placeat ea ex? Eius dolore, ab dolorem enim explicabo reiciendis asperiores sint possimus repellendus?</p>
    }
    const test2 = {
        a : <p>Doloremque harum ipsa sit nulla provident iste esse sint? Voluptatem sint officia explicabo fugiat ipsam architecto quis, iure dolorum laborum neque molestias.</p>,
        b : <p>Minima similique magni illum eius dignissimos maiores deleniti sed eligendi assumenda? Culpa tempora assumenda libero doloremque dignissimos iure soluta voluptate nemo consequatur.</p>,
        c : <p>Ratione pariatur quibusdam quos molestiae placeat nam temporibus possimus laudantium tempore beatae, dolores magnam obcaecati eaque quaerat exercitationem quasi adipisci sint cupiditate.</p>,
        d : <p>Voluptas numquam ratione deserunt maiores necessitatibus dolores magnam quas inventore dolor dignissimos! Dolore aliquid, dignissimos aut dolor expedita quos praesentium ex repellat?</p>
    }
    const test3 = {
        a : <p>Obcaecati mollitia architecto iusto ipsam voluptatem voluptatum deserunt! Officia tenetur inventore error nostrum! Atque molestiae voluptatem corrupti labore voluptate doloremque maxime nihil?</p>,
        b : <p>Iusto quibusdam veniam nam officia aperiam nisi vel, excepturi temporibus commodi at, ipsum, numquam consectetur. Facilis provident sint dolore culpa? Sit, quo!</p>,
        c : <p>Doloribus excepturi aspernatur quisquam quibusdam dolorum maxime autem incidunt reprehenderit repellendus, voluptatum velit dolores aliquam, impedit earum odio modi perspiciatis. Sint, officiis!</p>,
        d : <p>Necessitatibus illum eius vitae earum laborum iusto, sed expedita vel repudiandae labore fugit mollitia numquam dolores eum ipsa fuga magnam pariatur quis.</p>
    }
    const test4 = {
        a : <p>Dolores, eligendi tenetur culpa accusantium odio perferendis quidem explicabo dicta quod exercitationem suscipit autem, rerum debitis! Deserunt nihil sit libero vel quam.</p>,
        b : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ad ipsa aut perferendis explicabo laudantium commodi, qui quaerat vitae consequuntur officia, voluptate corporis tempore quia molestias hic ex voluptates modi.</p>,
        c : <p>Consequuntur quibusdam fuga tempora labore reiciendis dolorem iusto debitis excepturi? Rerum assumenda nisi quas facere enim autem eaque magni quam consequuntur. Quod!</p>,
        d : <p>Voluptatem molestiae accusamus ratione et, laboriosam nesciunt obcaecati cum tempore saepe numquam eos, atque molestias placeat voluptas porro iure explicabo magni dicta!</p>
    }
    const test5 = {
        a : <p>Accusantium recusandae veritatis assumenda harum, unde blanditiis adipisci? Perferendis error culpa eveniet, quaerat alias nam laudantium maxime voluptates itaque. Maxime, mollitia suscipit.</p>,
        b : <p>Voluptates doloremque obcaecati laboriosam distinctio suscipit. Laboriosam consequuntur facilis quaerat nostrum autem quia esse! Dolorum asperiores perspiciatis beatae mollitia quasi fugit quo.</p>,
        c : <p>Reiciendis repellat rem reprehenderit numquam eligendi, exercitationem, aliquid, corrupti ratione consequuntur rerum voluptatum voluptate temporibus odit at voluptates ex? Alias, assumenda nisi.</p>,
        d : <p>Maiores amet assumenda distinctio consectetur similique inventore consequuntur porro, illum velit libero sit odit sapiente, laboriosam repellendus. At velit accusamus et impedit?</p>
    }
    const test6 = {
        a : <p>Accusantium neque beatae ea impedit ratione provident quas nostrum aut, aperiam in sed ad quae eaque ab. Necessitatibus ratione nobis non incidunt.</p>,
        b : <p>Optio blanditiis ipsam dolore enim iusto, numquam voluptatum doloremque architecto, adipisci rem suscipit alias repellat quasi ipsa vero odio. Ullam, voluptas natus.</p>,
        c : <p>Ratione dicta ipsum eveniet deleniti adipisci similique laborum consectetur voluptatum quae cupiditate a impedit animi mollitia, nesciunt, amet ab quidem modi tempore.</p>,
        d : <p>Autem tenetur omnis, animi laboriosam repellat adipisci esse quibusdam ipsa similique culpa, officiis, nihil ipsam qui. Dolorem delectus unde doloremque dolorum esse?</p>
    }
    let a = useParams()
    let b = [img1,img2,img3,img4,img5,img6]

  return (
    <div className='imgBody'>
        <Header/>
        <div className='imgLocation'>
            <div className='img'>
                <ImgContent img={b[a.id-1]}/>
                <Test id={a.id} main ={main} test1={test1} test={[test1,test2,test3,test4,test5,test6]}/>
                {/* <div className='imgText'>
                    <h1>img{a.id}</h1>
                    <p>
                        Eos quo quia dicta iure magni autem ad, veniam alias similique suscipit dolore quisquam rem, voluptates, facere ea libero voluptatibus corporis modi!
                    </p>
                    <p>
                        Amet dolor earum voluptate. Quasi adipisci laborum corporis atque sed nisi voluptatem error sequi, quibusdam cumque autem facilis, minus soluta! Corporis, praesentium!
                    </p>
                    <p>
                        Fuga perferendis quasi, tenetur, et ut vero praesentium cupiditate, blanditiis numquam nihil quo. Assumenda ipsam libero debitis aut perspiciatis ullam harum suscipit.
                    </p>
                    <p>
                        Aspernatur autem recusandae nobis id ipsa quas quia qui numquam dolores possimus velit saepe excepturi atque molestias, consequatur exercitationem veritatis, cupiditate sapiente?
                    </p>
                    <button onClick={main}>메인으로</button>
                </div> */}
            </div>
        </div>

    </div>
  )
}

export default Img