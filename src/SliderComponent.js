import React, { useEffect, useState } from 'react'
import { db } from "./firebase.js"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "./SliderComponent.css"

function SliderComponent({ trackId }) {

    const links = ["https://hbomax-images.warnermediacdn.com/2022-01/680x383_cz-en_2001_a_space_oddyssey.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_batman_v_superman%20copy.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2021-10/680x383_spain-en_be_cool_scooby_doo_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_his-dark-materials_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_zack_snyder%27s_justice_league_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_nl_house_of_the_dragon_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_Fantastic_Beasts_and_Where_to_Find_Them.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_friends_the_reunion_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_friends.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_game_of_thrones_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_inception.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_gossipgirl_maxoriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_looney_tunes.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2021-10/680x383_spain-en_joker_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_gossipgirl_maxoriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_inception.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_his-dark-materials_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_euphoria_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com"]

    // const addPosts = (item) => {
    //     db.collection("pic-slider1")
    //         .add(
    //             {
    //                 picURL: item,
    //             }
    //         )
    // }

    // const addPics = () => {
    //     links.forEach((link) => addPosts(link));
    // }

    const [pics, setPics] = useState([]);
    useEffect(() => {
        db.collection("pic-slider1")
            .onSnapshot(snapshot => (
                setPics(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }
                    ))
                )
            ))
    }, []);

    return (
        <div className='SliderComponent' trackId>
            <div id={trackId} >
                {
                    pics.map(({ id, data: { picURL } }) => (
                        <div className="slide" key={id}>
                            <img
                                key={id}
                                src={picURL}
                            />
                        </div>
                    ))
                }
            </div>
            {/* <button onClick={addPics} type="submit">click</button> */}

        </div >
    )
}

export default SliderComponent