import React from 'react';

const CommentsList = (props) => {
  const { comments, removeComment } = props;

  return (
    <div>
			
			<h2>Комментарии:</h2>

			<div
			className={"container"}
			>

				<ol>
					{

						comments.map(comment => {
							const className = 'comments__comment';

							return (
								<li
									key={comment.id}
									className={className}
								>

									<span
										className="comments__comment-name"
									>
										{comment.name}
									</span>

									<button
										className="comments__comment-button"
										onClick={ev => removeComment(comment.id)}
									>
									</button>

									<div
										className="comments__comment-text"
									>
										{comment.comment}
									</div>

									<span
										className="comments__comment-date"
									>
										{comment.date}
									</span>

								</li>
							)
						})

					}
				</ol>	
		
			</div>
    </div>
  );
};

export default CommentsList;