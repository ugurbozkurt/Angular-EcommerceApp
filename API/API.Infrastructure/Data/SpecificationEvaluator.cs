using API.Core.DbModels;
using API.Core.Specifications;
using Microsoft.EntityFrameworkCore;
using System.Buffers.Text;

namespace API.Infrastructure.Data
{
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity, new()
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> spec)
        {
            // inputQuery = null
            var query = inputQuery;
            // spec.Includes = null
            if (spec.Criteria != null)
            {
                // query = null
                query = query.Where(spec.Criteria);
            }
            // spec.Includes = null
            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));
            return query;
        }
    }
}
