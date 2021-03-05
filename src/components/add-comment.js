import React from 'react';

const AddComment = (props) => {
  const { addComment } = props;

  let newName = '';
  let newComment = '';

  return (
    <div
			className={'form-container'}
		>
			<h2>Добавить комментарий:</h2>
			<form
				className={"form"}
			>
				<label
					htmlFor="name"
					className="form__name"
				>
					Имя:
				</label>
				<input
					id="name"
					className="form__name-input"
					placeholder="Введите имя"
					required={true}
					onChange={ev => newName = ev.target.value}
				>
				</input>
				<label
					htmlFor="comment"
					className="form__comment"
				>
					Комментарий:
				</label>
				<textarea
					id="comment"
					className="form__comment-input"
					placeholder="Введите комментарий"
					required={true}
					onChange={ev => newComment = ev.target.value}
				>
				</textarea>
				<button
					className={'form__btn'}
					onClick={ev => {
            	ev.preventDefault();
				if (newName == '' || newComment == '') return;
            	addComment(newName, newComment);
				document.querySelector('.form__comment-input').value = '';
				document.querySelector('.form__name-input').value = '';
				newComment = '';
				newName = '';
          	}
          }
				>
					Добавить комментарий
				</button>
				
			</form>
		</div>
  );
};

export default AddComment;