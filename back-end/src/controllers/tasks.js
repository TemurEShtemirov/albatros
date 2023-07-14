import { readFileName } from'../utils/fileSystem.js'
import { writeFileName } from '../utils/fileSystem.js'
import { join } from 'path';
import { parseTaskBody } from '../utils/helpers.js';

export const GET_TASKS = (req, res) => {
  try {
    res.status(200).json(readFileName(join('src', 'data'), 'tasks.json'));
  } catch (error) {
    res.status(500).json({
      error: error.stack,
    });
  }
};

export const GET_TASK_BY_ID = (req, res) => {
  try {
    const id = req.params.id;

    const tasks = readFileName(join('src', 'data'), 'tasks.json');

    const task = tasks.find((task) => task.id == id);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      error: error.stack,
    });
  }
};

export const ADD_TASKS = (req, res) => {
  try {
    const tasks = readFileName(join('src', 'data'), 'tasks.json');

    tasks.push({
      id: tasks.at(-1)?.id + 1 || 1,
      body: '',
      orderId: 1,
      completed: false,
      smallBody: '',
      date: '10.07.2023',
      categoryId: 0,
    });

    writeFileName(join('src', 'data'), 'tasks.json', tasks);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.stack,
    });
  }
};

export const REMOVE_TASK = (req, res) => {
  try {
    const id = req.params.id;

    const tasks = readFileName(join('src', 'data'), 'tasks.json');

    const filteredTasks = tasks.filter((task) => task.id != id);

    writeFileName(join('src', 'data'), 'tasks.json', filteredTasks);

    res.status(200).json(filteredTasks);
  } catch (error) {
    res.status(500).json({
      error: error.stack,
    });
  }
};

export const UPDATE_TASK = (req, res) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid request parameters' });
      return;
    }

    const data = parseTaskBody(req.body);

    console.log(data);
    if (data instanceof Error) {
      res.status(404).json({ error: JSON.parse(data.message) });
      return;
    }

    const { date, categoryId, completed, body, smallBody } = data;

    const tasks = readFileName(join('src', 'data'), 'tasks.json');
    const task = tasks?.find((task) => task.id == id);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    task.date = date ?? task.date;
    task.body = body ?? task.body;
    task.categoryId =
      (categoryId ? +categoryId : categoryId) ?? task.categoryId;
    task.smallBody = smallBody ?? task.smallBody;
    task.completed = completed ?? task.completed;

    writeFileName(join('src', 'data'), 'tasks.json', tasks);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
