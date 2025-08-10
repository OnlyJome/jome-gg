import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function getCollection(dir) {
  const base = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(base)) return [];
  const files = fs.readdirSync(base).filter(f=>f.endsWith('.md'));
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const full = path.join(base, filename);
    const file = fs.readFileSync(full, 'utf-8');
    const { data, content } = matter(file);
    return { slug, ...data, content, html: md.render(content) };
  }).sort((a,b)=> new Date(b.date||0)-new Date(a.date||0));
}

export function getBySlug(dir, slug) {
  const base = path.join(process.cwd(), 'content', dir);
  const full = path.join(base, slug + '.md');
  const file = fs.readFileSync(full, 'utf-8');
  const { data, content } = matter(file);
  const html = md.render(content);
  return { slug, ...data, content, html };
}