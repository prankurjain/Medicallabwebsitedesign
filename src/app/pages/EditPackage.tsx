import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router';
import { ChevronLeft, Upload, X, Plus } from 'lucide-react';

export function EditPackage() {
  const navigate = useNavigate();
  const { packageId } = useParams();
  const [packageName, setPackageName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [preparation, setPreparation] = useState('');
  const [homeCollection, setHomeCollection] = useState(true);
  const [tests, setTests] = useState<string[]>(['']);
  const [image, setImage] = useState<File | null>(null);

  const addTest = () => {
    setTests([...tests, '']);
  };

  const updateTest = (index: number, value: string) => {
    const newTests = [...tests];
    newTests[index] = value;
    setTests(newTests);
  };

  const removeTest = (index: number) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with API call
    console.log('Package data:', {
      packageName,
      category,
      description,
      price,
      originalPrice,
      duration,
      preparation,
      homeCollection,
      tests: tests.filter((t) => t.trim() !== ''),
      image,
    });
    // Navigate back to admin packages
    navigate('/admin/packages');
  };

  return (
    <div style={{ backgroundColor: 'var(--soft-background)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="py-6"
        style={{
          backgroundColor: 'var(--dark-navy)',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/admin/packages"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <ChevronLeft size={20} />
              Back to Packages
            </Link>
          </div>
          <h1
            style={{
              fontSize: '22px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Edit Package
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Basic Information
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="packageName"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Package Name *
                </label>
                <input
                  id="packageName"
                  type="text"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  placeholder="e.g., Full Body Checkup - Basic"
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="category"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Health Package">Health Package</option>
                    <option value="Heart Health">Heart Health</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Women's Health">Women's Health</option>
                    <option value="Men's Health">Men's Health</option>
                    <option value="Senior Citizen">Senior Citizen</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="duration"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Duration *
                  </label>
                  <input
                    id="duration"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g., 24 hours, 2-3 days"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the health package"
                  rows={4}
                  className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing & Details Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Pricing & Details
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="price"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Price (₹) *
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="1299"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="originalPrice"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Original Price (₹)
                  </label>
                  <input
                    id="originalPrice"
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="1999"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="preparation"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Preparation Instructions
                </label>
                <textarea
                  id="preparation"
                  value={preparation}
                  onChange={(e) => setPreparation(e.target.value)}
                  placeholder="e.g., Fasting for 10-12 hours required. Only water allowed."
                  rows={3}
                  className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="homeCollection"
                  checked={homeCollection}
                  onChange={(e) => setHomeCollection(e.target.checked)}
                  className="w-5 h-5 rounded"
                  style={{
                    accentColor: 'var(--primary-blue)',
                  }}
                />
                <label
                  htmlFor="homeCollection"
                  className="cursor-pointer"
                  style={{
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                    fontWeight: '500',
                  }}
                >
                  Home Collection Available
                </label>
              </div>
            </div>
          </div>

          {/* Tests Included Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Tests Included
              </h2>
              <button
                type="button"
                onClick={addTest}
                className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                <Plus size={16} />
                Add Test
              </button>
            </div>

            <div className="space-y-3">
              {tests.map((test, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={test}
                    onChange={(e) => updateTest(index, e.target.value)}
                    placeholder={`Test ${index + 1}`}
                    className="flex-1 px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                  />
                  {tests.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTest(index)}
                      className="p-2 transition-colors duration-200 hover:bg-red-50"
                      style={{
                        color: 'var(--error-red)',
                        borderRadius: '8px',
                      }}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Upload Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Package Image
            </h2>

            <div
              className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 hover:border-primary-blue hover:bg-soft-background"
              style={{
                borderColor: image ? 'var(--teal-accent)' : 'var(--soft-blue-white)',
                backgroundColor: image ? 'var(--badge-bg)' : 'var(--soft-background)',
              }}
              onClick={() => document.getElementById('imageUpload')?.click()}
            >
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload
                size={48}
                style={{
                  color: 'var(--soft-blue-white)',
                  margin: '0 auto 16px',
                }}
              />
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {image ? image.name : 'Click to upload or drag and drop'}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}
              >
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/packages')}
              className="flex-1 transition-all duration-200 hover:bg-gray-100"
              style={{
                height: '52px',
                backgroundColor: 'white',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 transition-all duration-200 hover:opacity-90"
              style={{
                height: '52px',
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Update Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
