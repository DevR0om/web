import styles from './styles.module.scss';

interface InputProps{
    id: string;
    type: string;
    name: string;
    placeholder: string;
    label:string;
    labelName:string;
}

export default function InputUi({id, name, placeholder, type, label, labelName}: InputProps){
    return(
        <div className={styles.inputButton}>
        <label htmlFor={label}>{labelName}</label>
        <input 
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
        />
        </div>
    )
}