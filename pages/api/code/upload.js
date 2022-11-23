import { createNewHifu } from '@models/Hifu';
import { createNewCode } from '@models/Code';
import { id } from '@utils/unique';

export default async function handler(req, res) {

  const { authorId, title, description, code } = req.body

  const hifu = {
    id: id(),
    authorId,
    title,
    description,
    createdAt: new Date().toLocaleDateString()
  }  

  const codeToUpload = {
    id: id(),
    hifuId: hifu.id,
    ...code,
  }
    
  const newHifu = await createNewHifu(hifu)
  const newCode = await createNewCode(codeToUpload)

  res.status(200).json({...newHifu, ...newCode})
}