import { logDataAndQuery } from "../helpers/logDataAndQuery";
import Notes from "../models/Notes";
import NotesLabels from "../models/NotesLabels";

/**
 * Get all notes
 * @method GET
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const getAll = async (req, res) => {
  try {
    const data = await Notes.query().withGraphFetched("labels");

    const query = Notes.query().withGraphFetched("labels").toKnexQuery();

    logDataAndQuery(query, data);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 * Save new label into database
 * @method POST
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const postNote = async ({ body }, res) => {
  try {
    const { note, idLabel } = body;

    const resultNote = await Notes.query().insert(note);
    const queryNote = Notes.query().insert(note).toKnexQuery();

    logDataAndQuery(queryNote, resultNote);

    if (idLabel !== 0) {
      const note_label = { id_note: resultNote.id, id_label: Number(idLabel) };

      const resultLabel = await NotesLabels.query().insert(note_label);
      const queryLabel = NotesLabels.query().insert(note_label).toKnexQuery();

      logDataAndQuery(queryLabel, resultLabel);

      return res.status(200).json({ resultNote, resultLabel });
    }

    res.status(200).json({ resultNote });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/**
 * Delete note by id
 * @method DELETE
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const deleteNote = async ({ params }, res) => {
  try {
    const { id } = params;

    const result = await Notes.query().deleteById(id);
    const query = Notes.query().deleteById(id).toKnexQuery();

    if (result === 0) {
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    } else {
      res.json(result);
    }

    logDataAndQuery(query, result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/**
 * Update note by id
 * @method PATCH
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const updateNote = async ({ body, params }, res) => {
  try {
    const { id } = params;
    const { data } = body;

    const result = await Notes.query().findById(id).patch(data);
    const query = Notes.query().findById(id).patch(data).toKnexQuery();

    if (result === 0) {
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    } else {
      res.json({ result });
    }

    logDataAndQuery(query, result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
