import React, {Component} from "react";

class TOC extends Component {
    // return 값을 확인 후 render() 가 실행됨.
    // 즉, shouldComponentUpdate()가 실행되며 props의 data가 변경된지 여부를 확인 후 아래를 수행할지 안할지 확인함.
    // immutable 라이브러리를 사용하면 편리하게 개발 가능
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }

    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                       data-id={data[i].id}
                       onClick={function (id, e) {
                            e.preventDefault();
                            this.props.onChangePage(id);
                       }.bind(this, data[i].id)}
                    >
                        {data[i].title}
                    </a>
                </li>
            )
            i = i + 1;
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;