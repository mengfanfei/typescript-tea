import React from 'react'
import { List, Avatar, Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { Todo, getUserById } from './utils/data'

const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
)

interface TodoListProps {
  todoList: Todo[]
}

function TodoList({todoList}: TodoListProps) {
  return (
    <List
      className="demo-loadore-list"
      itemLayout="horizontal"
      dataSource={todoList}
      renderItem={
        item => {
          const user = getUserById(item.user)

          return (
            <List.Item
              key={item.id}
              actions={[
                <Dropdown overlay={menu}>
                  <Button key="list-loadmore-more">
                  操作 <DownOutlined />
                  </Button>
                </Dropdown>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={user.avatar}></Avatar>}
                title={<a href="https://ant.design">{user.name}</a>}
                description={item.date}
              />
              <div style={{textDecoration: item.isCompleted ? 'line-through' : 'none'}}>
                {item.content}
              </div>
            </List.Item>
          )
        }
      }
    />
  )
}

export default TodoList