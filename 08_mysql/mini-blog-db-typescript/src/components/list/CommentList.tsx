import React from 'react'
import styled from 'styled-components'
import CommentListItem from './CommentListItem'

// 댓글 타입 정의

interface CommentListProps {
  comments: string[]
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 오타 수정: 'aligh-items' → 'align-items' */
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comment, index) => (
        <CommentListItem key={index} comment={comment} />
      ))}
    </Wrapper>
  )
}

export default CommentList
