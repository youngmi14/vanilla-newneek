import Post from '@/components/Post/Post';
import * as styles from './PopularGroundPost.css';
import ViewMore from '@/components/ViewMore/ViewMore';

const PopularGroundPost = () => {

  const POPULARGROUND_INFO = {
    title: "그라운드 인기 포스트",
    link: "/grounds/popular"
  }

  const PostList = [
    {
        "id": 56040,
        "text": "다들 책 읽을 때 노래 들으시나요?🎼\n\n저는 잔잔한 음악을 배경삼아 책을 읽는 것을 정말 좋아해요. 책에 어울리는 분위기의 음악을 들으면 이야기에 몰입도 훨씬 잘 되는 것 같아서요.\n\n어떤 음악을 들으면 좋을지 고민인 분들을 위해 제가 애정하는 ‘가사 없는 음악playlist’ 유튜브 채널을 추천해드릴게요.🎧\n\n1. All was well \n\n2. Ending Credits\n\n3. 메르헨 Marchen\n\n유명한 책은 유튜브에 검색하면 그 책을 주제로 한 플레이리스트가 나오기도 하더라고요. \n참고하시고 즐거운 독서에 도움되었으면 좋겠습니다.🙂",
        "treeId": 15031,
        "parentId": null,
        "level": 0,
        "childrenCount": 2,
        "readCount": null,
        "pinCount": 0,
        "pinId": null,
        "createdAt": "2024-09-21T01:47:18.840506+09:00",
        "editedAt": "2024-09-21T14:41:33.078947+09:00",
        "stamps": {
            "all": {
                "count": 10,
                "items": [
                    {
                        "type": 4,
                        "count": 10
                    }
                ]
            },
            "my": []
        },
        "mentions": null,
        "media": [
            {
                "id": "6556",
                "type": "image",
                "file": "https://d2phebdq64jyfk.cloudfront.net/media/community/image/2198ff79-a4a1-4393-af68-d517cece5a02-6556.jpg",
                "thumbnail": "https://d2phebdq64jyfk.cloudfront.net/media/community/image/2198ff79-a4a1-4393-af68-d517cece5a02-6556-t.jpg"
            }
        ],
        "content": null,
        "channel": {
            "id": 31,
            "name": "모퉁이 책방 📚",
            "description": "책을 읽다 문득 쓸쓸해진 당신에게 ✉\r\n\r\n책 읽기가 외로운 일이 된 것은 언제부터 일까요? 책 읽기를 취미라고 말하는 것이 언제부터인가 멋쩍지 않았나요?  열린 공간에서 소리치는 것은 심심하고 독서 모임에 적을 두는 것은 부담스러운 당신을 위해 모퉁이 책방이 문을 엽니다. \r\n\r\n'모퉁이 책방' 에서는 이런 일을 합니다.\r\n1. 느슨한 연결 속에서 읽고 있는 책과 글귀를 공유합니다. \r\n2. 모두가 책방 직원이 되어 책을 추천하고 추천받습니다. \r\n3. (원한다면) 한 달에 한 권 책을 함께 읽고 감상을 나눕니다. (책은 매니저가 골라드려요.)\r\n\r\n'모퉁이 책방'에서는 이런 일을 하지 않습니다.\r\n1. '오글거린다' 금지! 다른 직원들의 표현 방식을 존중해주세요. \r\n2. '상처주는 댓글' 멈춰! 다른 직원들의 취향과 성향을 존중해주세요. \r\n\r\n책과 함께라면 단단한 벽도 돌아가는 모퉁이 일 뿐. \r\n모퉁이 너머에는 새로운 세상이 펼쳐질거에요.\r\n모퉁이에서 여러분을 기다릴게요!\r\n\r\n그라운드 매니저 소개\r\n한모 @hanmoduomo\r\n자주 읽고 가끔 쓰는 사람. 모 서점에서 책을 팔고 있습니다. 부업으로는 라디오와 신문을 통해 도서를 소개하고 종이책에 대한 강연을 진행합니다."
        },
        "user": {
            "badge": "seed",
            "followIdByMe": null,
            "userId": "2198ff79-a4a1-4393-af68-d517cece5a02",
            "handle": "newgreenleaves",
            "name": "신록",
            "bio": "🌿책을 좋아해요. \n🌿이야기를 소개하고 생각을 공유해요.",
            "photo": "https://d2phebdq64jyfk.cloudfront.net/media/image/user/photo/2198ff79-a4a1-4393-af68-d517cece5a02.1723862127.07936.jpg"
        },
        "article": null
    }
]

  return (
    <section className={styles.popularGroundPost}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{POPULARGROUND_INFO.title}</h2>
        <ViewMore link={POPULARGROUND_INFO.link} />
      </div>
      <div className={styles.postWrap}>
        {PostList.map(post =>
          <Post key={post.id} data={post} />
        )}
      </div>  
    </section>
  )
}

export default PopularGroundPost;