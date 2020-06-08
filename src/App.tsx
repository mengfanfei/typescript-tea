import React, {useRef, useState} from "react"
import {
  // List,
  // Avatar,
  Button,
  Typography,
  Form,
  // Input,
  // Select,
  // DatePicker,
  // Menu,
  // Dropdown,
  Tabs
} from 'antd'
// import { DownOutlined } from '@ant-design/icons'
import { todoListData } from './utils/data'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

import "./App.css"
import logo from './logo.svg'

const { Title } = Typography
// const { Option } = Select
const { TabPane } = Tabs



// const menu = (
//   <Menu>
//     <Menu.Item>完成</Menu.Item>
//     <Menu.Item>删除</Menu.Item>
//   </Menu>
// )

// const TodoInput = ({ value = {}}) => {
//   return (
//     <div className="todoInput">
//       <Input type="text" placeholder="输入待办事项内容"></Input>
//       <Select style={{width: 80}} size="small" defaultValue="66666666">
//         {
//           userList.map((user, index) => (
//             <Option value={user.id} key={index}>{user.name}</Option>
//           ))
//         }
//       </Select>
//       <DatePicker size="small" style={{marginLeft: "16px", marginRight: "16px"}}></DatePicker>
//     </div>
//   )
// }

// function TodoList() {
//   return (
//     <List className="demo-loadmore-list" itemLayout="horizontal" dataSource={todoListData}
//       renderItem={(item, index) => (
//         <List.Item key={index}
//           actions={[
//             <Dropdown overlay={menu}>
//               <Button key="list-loadmore-more">
//                 操作 <DownOutlined />
//               </Button>
//             </Dropdown>
//           ]}
//         >
//           <List.Item.Meta 
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title={
//             <a href="https://ant.design">{item.user}</a>
//             }
//             description={item.time}
//           />
//           <div>{item.content}</div>
//         </List.Item>
//       )} 
//     />
//   )
// }
function App() {
  const [todoList, setTodoList] = useState(todoListData)
  const callback = () => {}
  const onFinish = (values: any) => {
    const newTodo = {...values.todo, isCompleted: false}
    setTodoList(todoList.concat(newTodo))
  }
  const ref = useRef(null)

  const activeTodoList = todoList.filter(todo => !todo.isCompleted)
  const completedTodoList = todoList.filter(todo => todo.isCompleted)

  return (
    <div className="App" ref={ref}>
      <div className="container header">
        <img src={logo} alt=""/>
        <Title level={3}>图雀社区：汇聚精彩的免费实战教程</Title>
      </div>
      <div className="container">
        <Form onFinish={onFinish}>
          <Form.Item name="todo">
            <TodoInput />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="container">
        <Tabs onChange={callback} type="card">
          <TabPane tab="所有" key="1">
            <TodoList todoList={todoList} />
          </TabPane>
          <TabPane tab="进行中" key="2">
            <TodoList todoList={activeTodoList} />
          </TabPane>
          <TabPane tab="已完成" key="3">
            <TodoList todoList={completedTodoList} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default App;
