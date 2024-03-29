import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PostImage from './PostImage'

const PostWrite = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")

    let navigate = useNavigate()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 글을 작성할 수 있습니다.")
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        if (title === "" || content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            image: image,
            uid: user.uid
        }

        axios
            .post("/api/post/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/list");
                } else {
                    alert("글 작성이 실패하였습니다.")
                }
            })
    }
    return (
        <div className="write__wrap">
            <h2>글쓰기</h2>
            <form>
                <div>
                    <label htmlFor="wirte__title">제목</label>
                    <input
                        type="text"
                        id="wirte__title"
                        name="wirte__title"
                        autoComplete='off'
                        value={title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="text__content">내용</label>
                    <textarea
                        id="text__content"
                        name="text__content"
                        autoComplete="off"
                        value={content}
                        onChange={(e) => setContent(e.currentTarget.value)}
                        required
                    />
                </div>
                <PostImage setImage={setImage} />
                <div>
                    <button
                        type="submit"
                        className="btn_style2 mt30"
                        onClick={(e) =>
                            onSubmit(e)
                        }>글 작성하기</button>
                </div>
            </form >
        </div >
    )
}

export default PostWrite