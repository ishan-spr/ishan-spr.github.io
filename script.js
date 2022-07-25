(
    function () {
        let index = 1;

        function addNewtask(content) {
            let taskList = document.getElementById("task_list")

            let taskHolder = document.createElement('div')
            taskHolder.classList.add('task_holder')

            let checkBox = document.createElement('input')
            checkBox.setAttribute("type", "checkbox")
            checkBox.setAttribute("id",`checkbox-${index}`)
            taskHolder.appendChild(checkBox)

            let contentHolder = document.createElement('label')
            contentHolder.setAttribute('data-type','content')
            contentHolder.setAttribute("for",`checkbox-${index++}`)
            contentHolder.innerText = content
            taskHolder.appendChild(contentHolder)

            taskHolder.addEventListener('click', function (e) {
                e.stopPropagation()
                let isChecked = e.target.checked;
                if (isChecked) {
                    e.currentTarget.classList.add("checked")
                } else {
                    e.currentTarget.classList.remove("checked")
                }
            })

            taskList.append(taskHolder)
        }

        let form = document.getElementById('task_form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let formData = new FormData(form)
            addNewtask(formData.get('description'))
            form.reset()
        })
    }
)()