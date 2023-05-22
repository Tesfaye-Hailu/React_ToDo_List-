import React from 'react'

const Form = () => {
  return (
    <div className={StyleSheet.todoform} >
        <Form>
            <input className={styles.todoinput} placeholder="Add Todo Item"></input>
            <button className={styles.todobutton}>Add</button>
        </Form>

    </div>
  )
}

export default Form