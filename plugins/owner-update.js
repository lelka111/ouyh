import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^обновить|actualizar$/i
handler.rowner = true
handler.register = true
export default handler
