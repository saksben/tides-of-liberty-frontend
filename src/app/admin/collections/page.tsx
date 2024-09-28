"use client"

import {
  createCollection,
  deleteCollection,
  fetchCollections,
  updateCollection,
} from "@/lib/utils/apiService";
import React from "react";

const CollectionsPage = () => {
  const [collections, setCollections] = React.useState([]);
  const [newCollectionName, setNewCollectionName] = React.useState("");
  const [editCollectionSlug, setEditCollectionSlug] = React.useState("");
  const [editCollectionName, setEditCollectionName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await fetchCollections();
        setCollections(data);
      } catch (error) {
        setError("Failed to load collections");
      }
    };
    loadCollections();
  }, []);

  const handleAddCollection = async () => {
    try {
      await createCollection({ name: newCollectionName });
      setNewCollectionName("");
      // Reload collections
      const updatedCollections = await fetchCollections();
      setCollections(updatedCollections);
    } catch (error) {
      setError("Failed to add collection");
    }
  };

  const handleDeleteCollection = async (collectionSlug: string) => {
    try {
      await deleteCollection(collectionSlug);
      // Reload collections
      const updatedCollections = await fetchCollections();
      setCollections(updatedCollections);
    } catch (error) {
      setError("Failed to delete collection");
    }
  };

  const handleEditCollection = (collection) => {
    setEditCollectionSlug(collection.slug);
    setEditCollectionName(collection.name);
  };

  const handleUpdateCollection = async () => {
    if (editCollectionSlug) {
      try {
        await updateCollection(editCollectionSlug, {
          name: editCollectionName,
        });
        setEditCollectionSlug("");
        setEditCollectionName("");
        const updatedCollections = await fetchCollections();
        setCollections(updatedCollections);
      } catch (error) {
        setError("Failed to update collection.");
      }
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl text-center'>Manage Collections</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex gap-3'>
        <input
          type="text"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
          placeholder="New collection name"
          className="border"
        />
        <button onClick={handleAddCollection} className='rounded bg-green-700 p-2 text-white'>Add Collection</button>
      </div>
      <ul>
        {collections.map((collection) => (
          <li key={collection.slug}>
            {editCollectionSlug === collection.slug ? (
              <div className='flex gap-3'>
                <input
                  type="text"
                  value={editCollectionName}
                  onChange={(e) => setEditCollectionName(e.target.value)}
                  className='border'
                />
                <div className='flex gap-2'>
                  <button onClick={handleUpdateCollection} className='rounded bg-slate-500 p-2 text-white'>Update</button>
                  <button onClick={() => setEditCollectionSlug("")} className='rounded bg-red-500 text-white p-2'>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex gap-3 items-center'>
                {collection.name}
                <div className='flex gap-2'>
                  <button onClick={() => handleEditCollection(collection)} className='rounded bg-slate-500 p-2 text-white'>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteCollection(collection.slug)} className='rounded bg-red-500 text-white p-2'>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsPage;
