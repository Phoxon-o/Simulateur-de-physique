export function createTag(parent, tagName, content = null) {
    let tag = document.createElement(tagName);
    
    parent.appendChild(tag);

    if(content != null) {
        tag.appendChild(document.createTextNode(content));
    }

    return tag;
}