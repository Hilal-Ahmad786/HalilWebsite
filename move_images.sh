#!/bin/bash
ARTIFACT_DIR="/Users/hilalahamd/.gemini/antigravity/brain/dacb1012-38d1-414f-bc56-8b9da62bcb58"
DEST_IMAGES="public/images"
DEST_BLOG="public/images/blog"
DEST_CITIES="public/images/cities"

# Services
find "$ARTIFACT_DIR" -name "kazali_arac_*.png" -exec cp {} "$DEST_IMAGES/kazali-arac.png" \;
find "$ARTIFACT_DIR" -name "hasarli_arac_*.png" -exec cp {} "$DEST_IMAGES/hasarli-arac.png" \;
find "$ARTIFACT_DIR" -name "pert_arac_*.png" -exec cp {} "$DEST_IMAGES/pert-arac.png" \;
find "$ARTIFACT_DIR" -name "hurda_arac_*.png" -exec cp {} "$DEST_IMAGES/hurda-arac.png" \;

# Blog
find "$ARTIFACT_DIR" -name "blog_kazali_satis_*.png" -exec cp {} "$DEST_BLOG/kazali-arac-satis.png" \;
find "$ARTIFACT_DIR" -name "blog_pert_raporu_*.png" -exec cp {} "$DEST_BLOG/pert-raporu.png" \;
find "$ARTIFACT_DIR" -name "blog_hurda_arac_*.png" -exec cp {} "$DEST_BLOG/hurda-arac.png" \;

# Cities
find "$ARTIFACT_DIR" -name "city_istanbul_*.png" -exec cp {} "$DEST_CITIES/istanbul.png" \;
find "$ARTIFACT_DIR" -name "city_ankara_*.png" -exec cp {} "$DEST_CITIES/ankara.png" \;
find "$ARTIFACT_DIR" -name "city_izmir_*.png" -exec cp {} "$DEST_CITIES/izmir.png" \;
find "$ARTIFACT_DIR" -name "city_bursa_*.png" -exec cp {} "$DEST_CITIES/bursa.png" \;
find "$ARTIFACT_DIR" -name "city_antalya_*.png" -exec cp {} "$DEST_CITIES/antalya.png" \;
find "$ARTIFACT_DIR" -name "city_adana_*.png" -exec cp {} "$DEST_CITIES/adana.png" \;
find "$ARTIFACT_DIR" -name "city_konya_*.png" -exec cp {} "$DEST_CITIES/konya.png" \;
find "$ARTIFACT_DIR" -name "city_gaziantep_*.png" -exec cp {} "$DEST_CITIES/gaziantep.png" \;
find "$ARTIFACT_DIR" -name "city_mersin_*.png" -exec cp {} "$DEST_CITIES/mersin.png" \;
find "$ARTIFACT_DIR" -name "city_kayseri_*.png" -exec cp {} "$DEST_CITIES/kayseri.png" \;
