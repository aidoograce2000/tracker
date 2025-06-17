import { useState } from 'react';
import '../styles/project.css';
import {
    FaPlus,
    FaTrash,
    FaEdit,
    FaFileExport
} from 'react-icons/fa';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';


const Projects = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'PR298', client: 'Hanny', tracked: '0h', amount: '0.00 USD', progress: '-', access: 'Public', billing: 'Billable' }

    ]);

    const [filter, setFilter] = useState({ active: 'Active', client: 'Select all', access: 'Select all', billing: 'Billable', search: '' });

    const [showCreate, setShowCreate] = useState(false);
    const [createData, setCreateData] = useState({ name: '', client: '', access: 'Public', billing: 'Billable' });

    const [editData, setEditData] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [editErrors, setEditErrors] = useState({});


    /* ---- helpers ---- */
    const clients = Array.from(new Set(projects.map(p => p.client))).filter(Boolean);
    const users = ['Grace', 'John'];

    /* ---- CRUD ---- */
    const [createErrors, setCreateErrors] = useState({});

    const handleCreate = () => {
        const errors = {};
        if (!createData.name.trim()) errors.name = 'Project name is required';
        if (!createData.client.trim()) errors.client = 'Client is required';

        if (Object.keys(errors).length > 0) {
            setCreateErrors(errors);
            return;
        }

        const nextId = projects.length ? Math.max(...projects.map(p => p.id)) + 1 : 1;
        setProjects([...projects, { id: nextId, ...createData, tracked: '0h', amount: '0.00 USD', progress: '-' }]);
        setShowCreate(false);
        setCreateData({ name: '', client: '', access: 'Public', billing: 'Billable' });
        setCreateErrors({});
    };


    const handleEditSave = () => {
        const errors = {};
        if (!editData.name.trim()) errors.name = 'Project name is required';
        if (!editData.client.trim()) errors.client = 'Client is required';

        if (Object.keys(errors).length > 0) {
            setEditErrors(errors);
            return;
        }

        const updated = projects.map(p => p.id === editData.id ? { ...editData } : p);
        setProjects(updated);
        setEditData(null);
        setEditErrors({});
    };


    const handleDelete = () => {
        setProjects(projects.filter(p => p.id !== deleteId));
        setDeleteId(null);
    };

    /* ---- FILTER ---- */
    const filteredProjects = projects.filter(p => {
        const c = filter.client;
        const matchClient = c === 'Select all' || (c === 'Without Client' ? !p.client : p.client === c);
        const matchAccess = filter.access === 'Select all' || users.includes(filter.access) || p.access === filter.access;
        const matchBilling = filter.billing === 'All' || p.billing === filter.billing;
        const matchSearch = p.name.toLowerCase().includes(filter.search.toLowerCase());
        return matchClient && matchAccess && matchBilling && matchSearch;
    });

    /* ---- EXPORT ---- */
    const handleExport = () => {
        const header = ['Name', 'Client', 'Tracked', 'Amount', 'Progress', 'Access', 'Billing'];
        const rows = filteredProjects.map(p => [p.name, p.client, p.tracked, p.amount, p.progress, p.access, p.billing]);

        const csv = [header, ...rows].map(r => r.join(',')).join('\n');
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        const a = document.createElement('a');
        a.href = url; a.download = 'projects.csv'; a.click();
    };

    return (
        <>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <main className="projects-wrapper">
                    <div className="projects-header">
                        <h2>Projects</h2>
                        <div className="header-actions">
                            <button className="export-btn" onClick={handleExport}><FaFileExport />Export</button>
                            <button className="primary-btn" onClick={() => setShowCreate(true)}><FaPlus />Create Project</button>
                        </div>
                    </div>

                    <div className="filter-bar">
                        <select value={filter.active} onChange={e => setFilter({ ...filter, active: e.target.value })}>
                            <option>Active</option><option>Archived</option><option>All</option>
                        </select>
                        <select value={filter.client} onChange={e => setFilter({ ...filter, client: e.target.value })}>
                            <option>Client</option><option>Without Client</option>{clients.map(c => <option key={c}>{c}</option>)}
                        </select>
                        <select value={filter.access} onChange={e => setFilter({ ...filter, access: e.target.value })}>
                            <option>Access</option>{users.map(u => <option key={u}>{u}</option>)}
                        </select>
                        <select value={filter.billing} onChange={e => setFilter({ ...filter, billing: e.target.value })}>
                            <option>Billable</option><option>Non Billable</option>
                        </select>
                        <input type="text" placeholder="Search name" value={filter.search} onChange={e => setFilter({ ...filter, search: e.target.value })} />
                    </div>

                    <div className="table-wrapper">
                        <table className="projects-table">
                            <thead>
                                <tr><th>Name</th><th>Client</th><th>Tracked</th><th>Amount</th><th>Progress</th><th>Access</th><th>Billing</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                {filteredProjects.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.client || '-'}</td>
                                        <td>{p.tracked}</td>
                                        <td>{p.amount}</td>
                                        <td>{p.progress}</td>
                                        <td>{p.access}</td>
                                        <td>{p.billing}</td>
                                        <td>
                                            <button className="icon-btn" onClick={() => setEditData({ ...p, checklist: p.checklist.join(', ') })}><FaEdit /></button>
                                            <button className="icon-btn destructive" onClick={() => setDeleteId(p.id)}><FaTrash /></button>
                                        </td>
                                    </tr>
                                ))}
                                {!filteredProjects.length && <tr><td colSpan="9" className="no-data">No projects found</td></tr>}
                            </tbody>
                        </table>
                    </div>

                    {/* CREATE MODAL */}
                    {showCreate && (
                        <div className="modal-overlay" onClick={e => e.target.className === 'modal-overlay' && setShowCreate(false)}>
                            <div className="modal">
                                <h3>Create Project</h3>
                                <label>
                                    Name
                                    <input value={createData.name} onChange={e => setCreateData({ ...createData, name: e.target.value })} />
                                    {createErrors.name && <span className="error">{createErrors.name}</span>}
                                </label>

                                <label>
                                    Client
                                    <input value={createData.client} onChange={e => setCreateData({ ...createData, client: e.target.value })} />
                                    {createErrors.client && <span className="error">{createErrors.client}</span>}
                                </label>

                                <label>Access<select value={createData.access} onChange={e => setCreateData({ ...createData, access: e.target.value })}><option>Public</option><option>Private</option></select></label>
                                <label>Billing<select value={createData.billing} onChange={e => setCreateData({ ...createData, billing: e.target.value })}><option>Billable</option><option>Non Billable</option></select></label>
                                <div className="modal-actions">
                                    <button className="primary-btn" onClick={handleCreate}>Save</button>
                                    <button className="secondary-btn" onClick={() => setShowCreate(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* EDIT MODAL */}
                    {editData && (
                        <div className="modal-overlay" onClick={e => e.target.className === 'modal-overlay' && setEditData(null)}>
                            <div className="modal">
                                <h3>Edit Project</h3>
                                <label>
                                    Name
                                    <input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} />
                                    {editErrors.name && <span className="error">{editErrors.name}</span>}
                                </label>

                                <label>
                                    Client
                                    <input value={editData.client} onChange={e => setEditData({ ...editData, client: e.target.value })} />
                                    {editErrors.client && <span className="error">{editErrors.client}</span>}
                                </label>

                                <label>Access<select value={editData.access} onChange={e => setEditData({ ...editData, access: e.target.value })}><option>Public</option><option>Private</option></select></label>
                                <label>Billing<select value={editData.billing} onChange={e => setEditData({ ...editData, billing: e.target.value })}><option>Billable</option><option>Non Billable</option></select></label>
                                <div className="modal-actions">
                                    <button className="primary-btn" onClick={handleEditSave}>Save</button>
                                    <button className="secondary-btn" onClick={() => setEditData(null)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DELETE CONFIRM */}
                    {deleteId !== null && (
                        <div className="modal-overlay" onClick={e => e.target.className === 'modal-overlay' && setDeleteId(null)}>
                            <div className="modal">
                                <h3>Delete Project</h3>
                                <p>Are you sure you want to delete this project?</p>
                                <div className="modal-actions">
                                    <button className="primary-btn destructive" onClick={handleDelete}>Yes, Delete</button>
                                    <button className="secondary-btn" onClick={() => setDeleteId(null)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default Projects;

