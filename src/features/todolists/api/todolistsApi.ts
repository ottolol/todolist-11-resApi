import {instance} from '@/common/instance/instance'
import type {Todolist} from './todolistsApi.types'
import { BaseResponse } from '@/common/types'
 
export const todolistsApi = {
  getTodolists() {
    return instance.get<Todolist[]>('/todo-lists')
  },
  createTodolist(payload: {title: string}) {
    const { title} = payload
    return instance.post<BaseResponse<{item: Todolist}>>("/todo-lists", { title })
  },
  deleteTodolist(payload: {id: string}) {
    const { id } = payload
    return instance.delete<BaseResponse>(`/todo-lists/${id}`)
  },
  changeTodolistTitle(payload: {id: string, title: string}) {
    const { title, id } = payload
    return instance.put<BaseResponse>(`/todo-lists/${id}`, {title})
  },
}