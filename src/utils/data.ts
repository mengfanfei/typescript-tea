export interface Todo {
  id: string
  content: string
  user: string
  date: string
  isCompleted: boolean
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export function getUserById(userId: string) {
  return userList.filter(user => user.id === userId)[0]
}

export const todoListData: Todo[] = [
  {
    id: "1",
    content: "图雀社区：汇聚精彩的免费实战教程1",
    user: "23410977",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: "2",
    content: "图雀社区：汇聚精彩的免费实战教程2",
    user: "23410976",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: "3",
    content: "图雀社区：汇聚精彩的免费实战教程3",
    user: "58352313",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: "4",
    content: "图雀社区：汇聚精彩的免费实战教程4",
    user: "25455350",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    id: "4",
    content: "图雀社区：汇聚精彩的免费实战教程5",
    user: "666666666",
    date: "2020年3月2日 19:34",
    isCompleted: false
  },
]

export const userList: User[] = [
  {
    id: "666666666",
    name: "图雀社区",
    avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
  },
  {
    id: "23410977",
    name: "mRcfps",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "25455350",
    name: "crxk",
    avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
  },
  {
    id: "58352313",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
  },
  {
    id: "12345678",
    name: "pony",
    avatar: "https://avatars3.githubusercontent.com/u/25010151?s=96&v=4"
  },
  {
    id: "23410976",
    name: "pftom",
    avatar: "https://avatars1.githubusercontent.com/u/26423749?s=88&v=4"
  },
]