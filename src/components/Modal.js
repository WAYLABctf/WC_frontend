import React, { Component } from 'react';
import "./Modal.css";

class Modal extends Component {
    chall_data = {
        challs: []
    };
    setcard = (card) => {
        let idx = Number(card.target.dataset.idx);
        let blinder = document.querySelector(".blinder");
        let title = document.querySelector("#modal_card > .mc_title");
        let description = document.querySelector("#modal_card > .mc_description");
        let field = document.querySelector("#modal_card > .mc_field");
        let pts = document.querySelector("#modal_card > .mc_pts");
        let author = document.querySelector("#modal_card > .mc_author");
        let url = document.querySelector("#modal_card > .mc_url");
        let download_link = document.querySelector("#modal_card > .mc_download_link");

        title.innerHTML = this.chall_data.challs[idx].probname;
        description.innerHTML = this.chall_data.challs[idx].descriptions;
        field.innerHTML = this.chall_data.challs[idx].field;
        pts.innerHTML = this.chall_data.challs[idx].pts;
        author.innerHTML = this.chall_data.challs[idx].author;
        url.innerHTML = !this.chall_data.challs[idx].url ? '' : this.chall_data.challs[idx].url;
        download_link.href = this.chall_data.challs[idx].google_driver;

        download_link.classList.remove("y", "n");
        if(!this.chall_data.challs[idx].google_driver) download_link.classList.add("n");
        else download_link.classList.add("y");

        blinder.classList.add("on");
    }
    render(){
        const {idx, title, field, pts, _id, solver, challs} = this.props;
        this.chall_data.challs = challs;
        let solve_status = JSON.parse(solver).solver.indexOf(_id) != -1 ? 'chall_box solved' : 'chall_box';
        let solvers = JSON.parse(solver).solver.length;
        return (
            <div className="modal" data-idx={idx} onClick={this.setcard}>
                <div className={solve_status} data-idx={idx}>
                    <span className="ch_title" data-idx={idx}>{title}</span>
                    <span className="ch_pts" data-idx={idx}>{pts} <span>pts</span></span>
                    <span className="ch_field" data-idx={idx}>{field}</span>
                    <span className="ch_solvers" data-idx={idx}>{solvers}</span>
                </div>
            </div>
        )
    }
}
export default Modal;