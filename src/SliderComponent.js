import React, { useEffect, useState } from 'react'
import { db } from "./firebase.js"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "./SliderComponent.css"

function SliderComponent({ trackId, pics }) {

    const links = ["https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_mare_of_easttown_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_raised_by_wolves_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_rick_and_morty.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_scenes_from_a_marriage_original.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_sex_and_the_city_hbooriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_succession_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_legacies.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_thebigbangtheory.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_The_lord_of_the_rings.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_the_flight_attendant_maxoriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_the_handmaids_tale.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2021-07/680x383_nordic_powerpuffgirls.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_ro_the_sopranos_hbooriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_The_undoing_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2021-07/680x383_mk-en_the_thaw_black_maxoriginal.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com"];

    const links2 = ["https://hbomax-images.warnermediacdn.com/2021-07/680x383_nordic_true_detective_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_blinded_by_the_lights.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_RO_big_little_lies_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2021-07/680x383_portugal_westworld_original.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com", "https://hbomax-images.warnermediacdn.com/2022-01/680x383_nl_wonder_woman.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com"];

    const addPosts = (item) => {
        db.collection("pic-slider2")
            .add(
                {
                    picURL: item,
                }
            )
    }

    const addPics = () => {
        links.forEach((link) => addPosts(links2));
    }



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


        </div >
    )
}

export default SliderComponent